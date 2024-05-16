import React, { useState } from "react";

const Menu = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState("");


  const handleCardClick = (food) => {
    const isSelected = selectedItems.includes(food.name);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== food.name));
      setTotalAmount(totalAmount - food.price);
    } else {
      setSelectedItems([...selectedItems, food.name]);
      setTotalAmount(totalAmount + food.price);
    }
    
  };

  const handleAmountClick = () => {
    if (totalAmount > 0) {
      setPaymentStatus(
        <div
    style={{
      backgroundColor: "rgba(47, 172, 89, 0.7)",
      color: "white",
      textAlign: "center",
      padding: "10px", // Optional: Add padding for better appearance
      borderRadius: "8px", // Optional: Add border radius for rounded corners
    }}
  >
    
    Amount Paid of Rs.{totalAmount}. Enjoy your meal!
    <h1>Checkout Recipes!</h1>
    
  </div>
      );

      setTotalAmount(0);
      setSelectedItems([]);
      
    }
  };

  const foods = [
    {   id:1,
        name:"Potato curry with roti",
        price:150,
        image:"https://img.taste.com.au/3djp2NHP/w720-h480-cfill-q80/taste/2016/11/potato-curry-with-roti-101092-1.jpeg"


    },
   
    {   id:2,
        name:"Tandoori-rubbed pumpkin wedges with lentil and herb salad",
        price:700,
        image:"https://img.taste.com.au/qvL3lruK/w720-h480-cfill-q80/taste/2018/10/tandoori-rubbed-pumpkin-wedges-with-lentil-and-herb-salad-142199-2.jpg"


    },
    {   id:3,
        name:"Indian chana masala",
        price:500,
        image:"https://img.taste.com.au/vLtS_PHq/w720-h480-cfill-q80/taste/2018/06/indian-chana-masala-138505-1.jpg"


    },
    {   id:4,
        name:"Curried vegetable hand pies",
        price:300,
        image:"https://img.taste.com.au/ebIHhol3/w720-h480-cfill-q80/taste/2020/04/may20_curried-vegetable-hand-pies-160738-1.jpg"


    },
    {   id:5,
        name:"Indian-style potatoes",
        price:250,
        image:"https://img.taste.com.au/qwRsc_iL/w720-h480-cfill-q80/taste/2018/06/july-18_indian-style-potatoes-138753-1.jpg"


    },
    {   id:6,
        name:"Roasted cauliflower dhal",
        price:450,
        image:"https://img.taste.com.au/gBSh1rNP/w720-h480-cfill-q80/taste/2018/06/july-18_roasted-cauliflower-dhal-138738-1.jpg"


    },
    {   id:7,
        name:"Grilled korma tofu steaks with lentil and spinach cauliflower rice",
        price:600,
        image:"https://img.taste.com.au/tHXRiCqq/w720-h480-cfill-q80/taste/2018/01/tofu-y-plant-based-protein-134296-2.jpg"


    },
    {   id:8,
        name:"Curried tofu and vegetable patties",
        price:465,
        image:"https://img.taste.com.au/83bbkcBX/w720-h480-cfill-q80/taste/2017/03/curry-tofu-vege-patties-125245-1.jpg"


    },
    {   id:9,
        name:"Curried burger",
        price:300,
        image:"https://img.taste.com.au/iLJ1x72z/w720-h480-cfill-q80/taste/2016/12/curried-vegan-burger_digiapi_1980x1320-119144-1.jpg"


    },
    {   id:10,
        name:"Vegan chickpea tikka masala",
        price:475,
        image:"https://img.taste.com.au/dCZ2qHLE/w720-h480-cfill-q80/taste/2016/11/vegan-chickpea-tikka-masala-108869-1.jpeg"


    },
    {   id:11,
        name:"Indian-style potato and pea smash",
        price:250,
        image:"https://img.taste.com.au/PywhNxwr/w720-h480-cfill-q80/taste/2016/11/indian-style-potato-and-pea-smash-108605-1.jpeg"


    },
    {   id:12,
        name:"Spiced potatoes and chickpeas",
        price:250,
        image:"https://img.taste.com.au/KqEbt0se/w720-h480-cfill-q80/taste/2016/11/spiced-potatoes-and-chickpeas-107848-1.jpeg"


    },
    {   id:13,
        name:"Turmeric cauliflower steaks",
        price:200,
        image:"https://img.taste.com.au/g4yvrXYq/w720-h480-cfill-q80/taste/2016/11/cauliflower-107922-2.jpeg"


    },
    {   id:14,
        name:"Garam masala potato salad",
        price:300,
        image:"https://img.taste.com.au/p5Bsfc5C/w720-h480-cfill-q80/taste/2016/11/garam-masala-potato-salad-106129-1.jpeg"


    },
    {   id:15,
        name:"Crispy spiced eggplant",
        price:275,
        image:"https://img.taste.com.au/_aozYmaw/w720-h480-cfill-q80/taste/2016/11/crispy-spiced-eggplant-106744-1.jpeg"


    },
    {   id:16,
        name:"Curried lentil and vegetable pie",
        price:450,
        image:"https://img.taste.com.au/eSNLsVfh/w720-h480-cfill-q80/taste/2016/11/curried-lentil-and-vegetable-pie-103235-1.jpeg"


    },
    { id:17,
        name: "Sweet spiced roast pumpkin and brown rice salad",
        price: 600,
        image:
          "https://img.taste.com.au/iVc8UWZq/w720-h480-cfill-q80/taste/2019/02/wholegrains-brown-rice-quinoa-146829-3.jpg"
      },
    
    
    
    
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-end text-xl font-bold">
        {paymentStatus ? (
          <span>{paymentStatus}</span>
        ) : (
          <>
            <button
              onClick={handleAmountClick}
              className=" fixed top-24 ml-4 bg-blue-700/70 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            >
              Pay : Rs.{totalAmount}
              
            </button>
          </>
        )}
      </div>
      <div className="grid grid-cols-5 gap-5 mt-8">
        {foods.map((food, index) => (
          <div
            key={index}
            className={`p-4 rounded-md mx-4 my-4 cursor-pointer transition duration-300 ${
              selectedItems.includes(food.name)
                ? "bg-green-500/40"
                : "bg-white/40"
            }`}
            onClick={() => handleCardClick(food)}
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-lg mb-2 hover:transform hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-slate-800/90 rounded-lg">
              <div className="text-center font-semibold text-slate-200 ">{food.name}</div>
              <div className="text-center text-slate-200">Rs.{food.price}</div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

