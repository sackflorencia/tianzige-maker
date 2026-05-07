const CharactersList = ({ characters, onDelete }) => {
    return (
        <>
            {characters.map((character, index) => (
                <div key={index}>
                    <button onClick={() => onDelete(index)}>
                        {character}
                    </button>
                </div>
            ))}

        </>
    );
}
export default CharactersList;