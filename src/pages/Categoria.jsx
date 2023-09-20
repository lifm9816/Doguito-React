import { useState, useEffect } from "react";
import { buscar } from "../api/api";
import ListCategories from "../components/ListCategories";
import ListPost from "../components/ListPost";
import { useParams, Routes, Route, Link, useResolvedPath } from "react-router-dom";
import SubCategoria from "./SubCategoria";
import "../assets/css/blog.css"

const Categoria = () => 
{
    const [subcategorias, setSubcategorias] = useState([]);
    const {id} = useParams();

    const url = useResolvedPath("").pathname;

    useEffect(() => {
        buscar(`/categorias?id=${id}`, (response) => {
            setSubcategorias(response[0].subcategorias);
        });
    }, [id]);

    return (
        <>
        <div className = "container">
            <h2 className = "title-page">Pet Noticias</h2>
        </div>
        <ListCategories />
        <ul className = "category-list container flex" >
            {
                subcategorias.map(subcategoria => (
                    <li className = {`category-list__category category-list__category--${id}`} key = {subcategoria} >
                        <Link to = {`${url}/${subcategoria}`} >
                            {subcategoria}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <Routes>
            <Route path = "/" element = {<ListPost url = {`/posts?categoria=${id}`} />} />
            <Route path = "/:subcategoria" element = {<SubCategoria />} />
        </Routes>
        </>
    )
}

export default Categoria