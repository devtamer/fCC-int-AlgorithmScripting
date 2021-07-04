


function PullData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/550?api_key=420438587a9e93afa0ce4e6e67884769")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.name} {item.price}
                </li>
            ))}
        </ul>
    );
}