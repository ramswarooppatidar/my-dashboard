import { BrowserRouter , createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Innvoice from "./components/Innvoice";
import Product from "./components/Product";
import Login from "./components/Login";
function App(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/invoice", element: <Innvoice /> },
        { path: "/dashboard", element: <Dashboard /> },
        {path : "/products", element: <Product/>}
      ],
      // path :"/login", element : {}
    },
    {path :"login", element:<Login/>}
    
  ]);
  return<>
      <RouterProvider router={router} />
  </>
}
export default App;

// import { useState } from "react";
// import { items } from "./data/data";
// function App() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//    const [questions, setQuestions] = useState([])
  
//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   // const currentQuestion = items[currentQuestionIndex];
//   questions.push(items[currentQuestionIndex])

//   return<div>
//       <div className="flex flex-col">
//         {questions.map((val)=>{
//           return(<div>
//           <div>
//           <p>{val.question}</p>
//         </div>
//         <div>
//           {val.type === "verbal" ? (
//             <h1 className="text-primary">Verbal Question</h1>
//           ) : (
//             <textarea
//               className="h-32 min-w-full border border-gray-300 hover:border-primary focus:outline-none"
//               placeholder="Write your code here..."
//             ></textarea>
//           )}
//         </div>
//         <button onClick={handleNextQuestion} className="mt-4">
//           Next Question
//         </button>
//       </div>)
//         })}
//         </div>
       
//     </div>;
// }

// export default App;






//2
// import { useState } from "react";
// import { items } from "./data/data";

// function App() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   // const [questions, setQuestions] = useState([])
  
//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const currentQuestion = items[currentQuestionIndex];
//   // questions.push(items[currentQuestionIndex])

//   return (
//     <div>
//       <div className="flex flex-col">
        
//         <div>
//           <p>{currentQuestion.question}</p>
//         </div>
//         <div>
//           {currentQuestion.type === "verbal" ? (
//             <h1 className="text-primary">Verbal Question</h1>
//           ) : (
//             <textarea
//               className="h-32 min-w-full border border-gray-300 hover:border-primary focus:outline-none"
//               placeholder="Write your code here..."
//             ></textarea>
//           )}
//         </div>
//         <button onClick={handleNextQuestion} className="mt-4">
//           Next Question
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;











//3
// import { useEffect, useState } from "react";
// import { ImSpinner } from "react-icons/im";
// import Loading from "./components/Loading";
// import { items } from "./data/data";
// function App(){
//   const showAlert=()=>{
//       return alert("this is alert")
//   }
//     return(
//       <>
//       {items.map((val, key)=>{
//         return<div key={key}>
//           <div className="flex flex-col"> 
//             <div>
//               <p>{val.question}</p>
//             </div>
//               {/* if(val.type === "verbal"){
//                 <h2>verbal quesion</h2>
//               }else{
//                 <h1>type coding </h1>
//               } */}
//               {/* <div>
//                 {val.type === "verbal" ? (<h1 className="text-primary">verbal quesion</h1>) : 
//                 (<h1 className="text-secondary">coding question</h1>)}
//               </div>         */}
//               <div>
//                 {val.type === "verbal" ? (<h1 className="text-primary">verbal quesion</h1>) : 
//                 (<textarea
//                   className="h-32 min-w-full border border-gray-300 hover:border-primary focus:outline-none"
//                   placeholder="Write your code here..."
//                 ></textarea>)}
//               </div>  
//           </div>
//         </div>
//       })}
//       </>
//     )
// }
// export default App;






// function App(){
//   const [htmlContent, setHtmlContent] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(()=>{
//     fetchData();
//   }, [])
//   async function fetchData(){
//     try{
//       const response = await fetch('/index.html')
//       const html =  await response.text();
//       console.log('html :', html)
//       setHtmlContent(html);
//     }catch(error){
//       console.log("error", error.message)
//     }
    
//   }
//   const products =[  {
//     title : "html string",
//     image : "https://picsum.photos/536/354",
//     body : `lorem <i>dhjaa gdaja trhr</i> <b>jlduftjn ulwl udghf yauuejd </b>khdtui gdh hdj twd sgdt
//             fakfjk <h1> ther is diggerent word may be used to create something to executed </h1>
//              <input type="text" 
//               placeholder="Enter Email"
//               /> 
//               <input type="text" 
//               placeholder="Enter Password"
//               onChange={handlePassword}
//               /> 
//               <button>Sign-in</button>`,
//     }
//   ,]
//   // const [body] = products;
//   const { body, image } = products[0];
//   function handleChange(){
//     setIsLoading(false);
//   }
//   return(
//     <>
//     <h1>Rendering HTML Content</h1>
     
//      <div>
//       {isLoading && <p>Image Loading ....</p>}
//       <img style={{marginLeft : 85,
//         display: isLoading ? "none" : "block"
//       }}
//        src={image}
//        onLoad={handleChange}
//        />
//        {/* <Loading/> */}
//      </div>
      
//       <div dangerouslySetInnerHTML={{ __html: body }} />
//     {/* </div> */}
//     </>
//   )
// }
// export default App;

// function App() {
//  const [data, setData] = useState([]);
//  const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//   flickrUrl = 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty';

//  useEffect(()=>{
//     fetchData();
//  }, [])
//  async function fetchData(){
//   let response = await fetch(flickrUrl);
//   response = await response.json();
//   console.log("response : ", response)
//  }
//   return (
//     <div>
//       <h1>html manipulated !</h1>
//       {data?.map((val, key)=>{
//         <article>
//           {val}
//         </article>
//       })}
//     </div>
//   );
// }

// export default App;









// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//   const flickrUrl = "https://api.flickr.com/services/feeds/photos_public.gne";

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       // Fetch the data
//       const response = await fetch(proxyUrl + flickrUrl);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       // Parse the response as text
//       const text = await response.text();
//       // Use DOMParser to convert the XML string to a DOM object
//       const parser = new DOMParser();
//       const xml = parser.parseFromString(text, "application/xml");

//       // Extract the data you need from the XML
//       const items = xml.querySelectorAll("entry");
//       const parsedData = Array.from(items).map((item) => ({
//         title: item.querySelector("title")?.textContent,
//         link: item.querySelector("link")?.getAttribute("href"),
//         image: item.querySelector("media\\:content")?.getAttribute("url"),
//       }));

//       setData(parsedData);
//     } catch (error) {
//       console.error("Failed to fetch:", error);
//     }
//   }

//   return (
//     <div>
//       <h1>HTML Manipulated!</h1>
//       {data.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         data.map((val, key) => (
//           <article key={key}>
//             <h2>{val.title}</h2>
//             <a href={val.link} target="_blank" rel="noopener noreferrer">
//               <img src={val.image} alt={val.title} width="200" />
//             </a>
//           </article>
//         ))
//       )}
//     </div>
//   );
// }

// export default App;

