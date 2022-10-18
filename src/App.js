// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FetchData } from './components/FetchThis';
// import withLayout from './components/Slider/Slider';
// import TestComponent from './components/TestComponent';
// import withRequireAuth from './components/Auth/RequireAuth';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage/LandingPage';
// import { useEffect, useState } from 'react';
// import withGelatine from './components/Animations/Gelatine';
// import Circle from './components/Circle';
// import withGreeting from './components/Animations/Greeting';

// function App() {
//   const [isUser, setIsUser] = useState(false);
//   const Slider = withLayout(TestComponent, FetchData);
//   const NeedAuth = withRequireAuth(Slider);
//   // const AnotherAuth = withRequireAuth(TestComponent);
//   const TestGelatine = withGelatine(Circle);
//   const TestGreeting = withGreeting(Circle);

//   useEffect(() => {
//     localStorage.user !== undefined ?? setIsUser(true);
//     return () => {};
//   }, [isUser]);
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path='/' element={<LandingPage />} />
//           <Route path='/auth' element={<TestGelatine />} />
//           <Route path='/test' element={<TestComponent />} />
//           <Route
//             path='animations'
//             element={
//               <>
//                 <TestGelatine /> <TestGreeting />
//               </>
//             }
//           />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
