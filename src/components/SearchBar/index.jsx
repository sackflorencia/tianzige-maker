const SearchBar = ({onSearch}) => {
    const submit = (e) => {
        e.preventDefault();
        onSearch(e.target["character-input"].value);
    }
  return (
    <form onSubmit={submit}>
        <input type="text" name="character-input" placeholder="Ingrese el caracter..." />
        <button type="submit">Ingresar</button>
    </form>
  );
};
export default SearchBar;