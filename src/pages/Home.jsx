import React, { useContext } from "react";
import Sort from "../components/Sort";
import SkeletonPizza from "../components/PizzaBlock/SkeletonPizza";
import PizzaBlock from "../components/PizzaBlock";
import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import BasicPagination from "../components/Pagination/Pagination";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCategory,
} from "../redux/slice/categorySort_and_PaginationSlice";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  //sort filter
  const sortParam = useSelector((state) => state.filterReducer.sortParam);
  const sortCategories = useSelector(
    (state) => state.filterReducer.categoryFilter
  );

  //sort by categories
  const activeCategory = useSelector(
    (state) => state.categorySortReducer.activeCategory
  );
  const dispatch = useDispatch();
  //pagination
  const paginationPages = useSelector(
    (state) => state.categorySortReducer.activePaginationPage
  );

  //render pizzas
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(6)].map((_, i) => <SkeletonPizza key={i} />);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(
        `https://632cc61b519d17fb53b3b7a6.mockapi.io/items?sortBy=${sortCategories[sortParam]}` +
          `${activeCategory ? `&category=${activeCategory}` : ""}` +
          `${searchValue ? `&search=${searchValue}` : ""}` +
          `${paginationPages ? `&page=${paginationPages} &limit=12` : ""}`
      )
      .then((res) => {
        setItems(res.data);
        setisLoading(false);
      });
    window.scrollTo(0, 0);
  }, [sortParam, activeCategory, searchValue, paginationPages]);

  useEffect(() => {
    const queryParam = qs.stringify({
      currentPages: paginationPages,
      activeCategory,
      sortParam,
    });
    navigate(`?${queryParam}`);
  }, [sortParam, activeCategory, searchValue, paginationPages]);

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onClickCategories={(i) => {
            dispatch(setActiveCategory(i));
          }}
        />
        <Sort />
      </div>
      <h2  className="content__title">All pizzas</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <BasicPagination />
    </>
  );
};

export default Home;
