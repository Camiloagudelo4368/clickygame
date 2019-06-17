import React, { useState } from "react";
import "./style.css";
import Header from '../components/Header'
import PageTitle from '../components/PageTitle'

let clicked = []
let count = 0;
let resultArray = []
let message = []
let bestScore = 0;

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Main() {
    const [imgObject, setImg] = useState({
        imgArray: [],
        urlArray: [
            {
                url: "../../img/Barney.png",
                value: 0
            },
            {
                url: "/img/Bart.png",
                value: 1
            },
            {
                url: "/img/Burns.png",
                value: 2
            },
            {
                url: "/img/CatsGirl.png",
                value: 3
            },
            {
                url: "/img/Cletus.png",
                value: 4
            },
            {
                url: "/img/Homer.png",
                value: 5
            },
            {
                url: "/img/Lisa.png",
                value: 6
            },
            {
                url: "/img/Nelson.png",
                value: 7
            },
            {
                url: "/img/Otto.png",
                value: 8
            },
            {
                url: "/img/Ralph.png",
                value: 9
            },
            {
                url: "/img/Snake.png",
                value: 10
            },
            {
                url: "/img/Willie.png",
                value: 11
            },
        ],
        urlSortedArray: [],
        value: []
    })


    // sort any array randomly
    const sortRandomArray = arr => { arr.sort(() => Math.random() - 0.5) }

    const handleClick = event => {
        event.preventDefault();


        if (clicked.indexOf(event.target.getAttribute("data-value")) !== -1) {
            count = 0;
            resultArray = [];
            clicked = []
            message = []
            alert("You lose!!! hit Ok to play again")
        }
        else {
            clicked.push(event.target.getAttribute("data-value"))
            count++
            // console.log(clicked, count)
            message[0] = (count === 1) ? "Ready... GO" : "Beautiful memory!!!"
            message[1] = "Do not hit the same image more than once"
        }

        if (count === imgObject.urlArray.length) {
            count = 0;
            resultArray = [];
            clicked = []
            message = []
            alert("Congratulations!!! you are awesome you scored perfect")
        }


        bestScore = (bestScore < count) ? count : bestScore

        setImg({
            ...imgObject,
            urlArray: [...imgObject.urlArray],
        })
        // console.log("Object Click", imgObject.urlArray)
        sortArray();
    }


    const sortArray = () => {
        // call sortArray function to sort the array of urls
        sortRandomArray(imgObject.urlArray)
        setImg({
            urlArray: [...imgObject.urlArray],
        })
    }

    const createImages = () => {
        let arr = imgObject.urlArray

        resultArray = []


        // goes through the array and set src for each image 
        for (let i = 0; i < arr.length; i++) {
            // console.log(i)
            const imgItem = <div className="col">
                <button  className="link" onClick={handleClick} data-value={arr[i].value} data-array={arr.url}>
                    <div className="imgDiv" data-value={arr[i].value} data-array={arr.url}>
                        <br></br>
                        <img className="img" srcSet={arr[i].url} alt='' data-value={arr[i].value} data-array={arr.url}>
                        </img>
                    </div>
                </button>
                <br></br>
                <br></br>
            </div>;
            resultArray.push(imgItem);
        }
        return (resultArray)

    }

    createImages();

    // console.log(imgArray)
    return (
        <div className="Main">
            <div className="headerMain">
                <Header yourScore={count} bestScore={bestScore} message={message}></Header>
            </div>
            <div className="titleMain">
                <PageTitle></PageTitle>
            </div>
            <div className="ImgContent">
                <div className="container">
                    <div className="row" >
                        {
                            createImages()
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Main;
