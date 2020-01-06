import React,{useEffect,useState} from "react";


function Example() {
    const[count,setCount] = useState("мамку")
    useEffect(()=>{
    document.title=`хлусович ${count} raz`})
    return(
        <form>
            <label>
                Имя:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Отправить" />
            <textarea>
  Доброго здоровья, тут просто немного текста внутри тега textarea
</textarea>
            <select>
                <option value="grapefruit">Грейпфрут</option>
                <option value="lime">Лайм</option>
                <option selected value="coconut">Кокос</option>
                <option value="mango">Манго</option>
            </select>

        </form>
    )


}
export default Example;







