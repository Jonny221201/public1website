import React from 'react';
import './Styles/categories.css';

function Categories() {
    return(
        <div className = 'container1'>
            <div className = 'category'>
                <h1 className = "categoryHead">Bo'limlar</h1>
            <ul className = "categoryUl">
                <li className = "categoryList"><a className = "categoryLink" href = "#">Ta'lim</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Ovqat</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Hunar</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Ish</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Texnika</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">O'yinlar</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Hikoyalar</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Ertak</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Biznes</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Bog'</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Dala</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Maktab</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Shaxsiy</a></li>
                <li className = "categoryList"><a className = "categoryLink" href = "#">Kattalar</a></li>
            </ul>
            </div>
        </div>
    )
    
}

export default Categories;