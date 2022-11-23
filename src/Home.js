
import React from 'react'
import Banner from './Banner'
import "./Home.css"
import Card from "./Card"

function Home() {
    return (
        <div className="home">
       
            <Banner />
            <div className='home_section'>
            <Card
                src="./platinum/4H4A3093.jpg"
                title="Package 1"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                // src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                src="./platinum/4H4A3080.jpg"
                title="Unique Foods"
                description="Spaces that are more than just food to eat."
            />
            <Card
                src="./platinum/4H4A3139.jpg"
                title="Family culture"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home_section'>
            <Card
                src="./platinum/4H4A6098.jpg"
                title="Sporting packages"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="R1300/3 months"
            />
            <Card
                src="./platinum/4H4A6337.jpg"
                title="Honeymoon Package"
                description="Enjoy the amazing sights of Durban beach with this stunning penthouse"
                price="R350/night"
            />
            <Card
                src="./platinum/4H4A3128.jpg"
                title="Cocktails "
                description="Have all cocktails from experienced barman"
                price="R70"
            />
            </div>

        </div>
    )
}

export default React.memo(Home)
