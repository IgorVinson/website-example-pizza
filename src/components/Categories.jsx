export default function Categories({ activeCategory, onClickCategories }) {
  const categories = ["All", "Meet", "Vegetarians", "Grill", "Spicy", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, i) => (
          <li
            key={el}
            onClick={() => {
              onClickCategories(i);
            }}
            className={activeCategory === i ? "active" : ""}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
  {
    /*<div className="categories">*/
  }
  {
    /*  <ul>*/
  }
  {
    /*    <li*/
  }
  {
    /*      onClick={() => {*/
  }
  {
    /*        setActiveCategory(0);*/
  }
  {
    /*      }}*/
  }
  {
    /*      className={activeCategory === 0 ? "active" : ""}*/
  }
  {
    /*    >*/
  }
  {
    /*      Все*/
  }
  {
    /*    </li>*/
  }
  {
    /*    <li*/
  }
  {
    /*      onClick={() => {*/
  }
  {
    /*        setActiveCategory(1);*/
  }
  {
    /*      }}*/
  }
  {
    /*      className={activeCategory === 1 ? "active" : ""}*/
  }
  {
    /*    >*/
  }
  {
    /*      Мясные*/
  }
  {
    /*    </li>*/
  }
  {
    /*    <li*/
  }
  {
    /*      onClick={() => {*/
  }
  {
    /*        setActiveCategory(2);*/
  }
  {
    /*      }}*/
  }
  {
    /*      className={activeCategory === 2 ? "active" : ""}*/
  }
  {
    /*    >*/
  }
  {
    /*      Вегетарианская*/
  }
  {
    /*    </li>*/
  }
  {
    /*    <li*/
  }
  {
    /*      onClick={() => {*/
  }
  {
    /*        setActiveCategory(3);*/
  }
  {
    /*      }}*/
  }
  {
    /*      className={activeCategory === 3 ? "active" : ""}*/
  }
  {
    /*    >*/
  }
  {
    /*      Гриль*/
  }
  {
    /*    </li>*/
  }
  {
    /*    <li*/
  }
  {
    /*      onClick={() => {*/
  }
  {
    /*        setActiveCategory(4);*/
  }
  {
    /*      }}*/
  }
  {
    /*      className={activeCategory === 4 ? "active" : ""}*/
  }
  {
    /*    >*/
  }
  {
    /*      Острые*/
  }
  {
    /*    </li>*/
  }
  {
    /*    <li*/
  }
  {
    /*      onClick={() => {*/
  }
  {
    /*        setActiveCategory(5);*/
  }
  {
    /*      }}*/
  }
  {
    /*      className={activeCategory === 5 ? "active" : ""}*/
  }
  {
    /*    >*/
  }
  {
    /*      Закрытые*/
  }
  {
    /*    </li>*/
  }
  {
    /*  </ul>*/
  }
  {
    /*</div>*/
  }
}
