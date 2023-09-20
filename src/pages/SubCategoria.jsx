import { useParams, useSearchParams } from "react-router-dom";
import ListPost from "../components/ListPost";


const SubCategoria = () =>
{
    const { subcategoria } = useParams();

    return (
        <ListPost url = {`/posts?subcategoria=${subcategoria}`} />
    )
}

export default SubCategoria