import "../styles.css";
const SearchItems = (props) => {
  return (
    <ul>
      {props.itemsValue.map((item) => {
        return (
          <li key={item.id}>
            <a target="_blank" href={item.backdrop_path}>
              {item.original_title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchItems;
