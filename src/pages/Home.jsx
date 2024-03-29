import {useEffect, useMemo, useState} from "react";
import {getAllCategories} from "../api";
import {Preloader} from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import {useLocation, useNavigate} from "react-router-dom";

const Home = () => {

    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {pathname, search} = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => {
                return item.strCategory.toLowerCase().includes(str.toLowerCase());
            })
        );
        navigate({pathname, search: `?search=${str}`});
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(data.categories.filter(item => {
                return search
                    ? item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
                    : item.strCategory
            }))
        })
    }, [search]);

    const memoizedFilteredCatalog = useMemo(() => {
        if (search) {
            return catalog.filter(item =>
                item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
            );
        } else {
            return catalog;
        }
    }, [catalog, search]);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? <Preloader/> : <CategoryList catalog={filteredCatalog}/>}
        </>
    );
};

export default Home;