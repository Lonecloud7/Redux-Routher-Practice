import { useDispatch } from "react-redux";
import { actionCreators } from "../Store";
import { bindActionCreators } from "redux";

 const useApiCall = () => {

    const dispatch = useDispatch()

    const {inputValue} = bindActionCreators(actionCreators, dispatch)

            const key = "aec9ac0f87f04b9686f66beb5ec8d954";
        var url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

        const Fetch = async (e) => {
            try {
            const res = await fetch(url);
            const data = await res.json();
            setNews(data);
            } catch (err) {
            console.log(err);
            }
        };
     return 
 }