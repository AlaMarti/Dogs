import React from 'react'

const Pagination = ({dogsPerPage, currentPage, setcurrentPage, info}) => {

    const pageNum = [];

    console.log(currentPage)

    console.log(info.length/dogsPerPage)

    // for(let i = 1; )

    return (

        <nav>
            <a href="">Previous</a>
            <a href="">Next</a>

            <ul>
                <li>
                    <a href="">1</a>
                </li>
                <li>
                    <a href="">46</a>
                </li>
            </ul>

        </nav>



    )
}

export default Pagination