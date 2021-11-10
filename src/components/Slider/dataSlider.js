import { v4 as uuidv4 } from "uuid";
import './Slider.css'

const dataSlider = [
  {
    id: uuidv4(),
    title: "Welcome to NoMoneyNoHoney.com",
    text: "You have been redirected to a website made for helping with your own financial management",
  },
  {
    id: uuidv4(),
    title: "Our features",
    text: "On NMNH.com you can write down your earnings and spendings, keep abreast of exchange rates, and some other features that in the development stage.",
  },
  {
    id: uuidv4(),
    title: "How to start?",
    text: "It is very easy to use our application, you just need to click the link on the top of our website in dependence of what you need to write down and click '+'. After that fill all the inputs and click button 'add'. That is all!) ",
  },
  {
    id: uuidv4(),
    title: "Features in development state",
    text: <ul className="slider_list">
      <li className="list_item">Converter(now there are only exchange rates).</li>
      <li className="list_item">Spinners for loading data from local storage and API.</li>
      <li className="list_item">Adding of types for earnings and spendings.</li>
      <li className="list_item">Sorting for earnings and spendings by month and type.</li>
      <li className="list_item">Pie-charts for earnings and spendings pages.</li>
    </ul>,
  },
  {
    id: uuidv4(),
    title: "Join us!",
    text: "And remember forever <<No Money - No Honey>>",
  },
];

export default dataSlider;