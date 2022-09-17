import React, { useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { initializeApp } from "firebase-admin/app";

import { AppWrapper, LeftSidebar, MiddleSection, RightSidebar } from "./style";
// import SideBar from "./components/sidebar";
// import MainApp from "./components/main-app";
import { fetchUser, makeid, setDocuments, writeUserData } from "./firebase_docs";
import { db } from "./firebase";
const App = () => {
  const theme = useTheme();

  // console.log(theme.palette.accent);

  const apiArray = [
    "/address/random_address",
    "/device/random_device",
    "/appliance/random_appliance",
    "/bank/random_bank",
    "/beer/random_beer",
    "/business_credit_card/random_card",
    "/code/random_code",
    "/coffee/random_coffee",
    "/company/random_company",
    "/computer/random_computer",
    "/crypto/random_crypto",
    "/crypto_coin/random_crypto_coin",
    "/color/random_color",
    "/food/random_food",
    "/dessert/random_dessert",
    "/name/random_name",
    "/name/random_name",
    "/stripe/random_stripe",
    "/subscription/random_subscription",
    "/vehicle/random_vehicle",
    "/id_number/random_id_number",
    "/internet_stuff/random_internet_stuff",
    "/nation/random_nation",
  ];

  const newArr = ["posts", "users", "todos", "albums", "posts/1/comments"];

  // get random hash

  // useEffect(() => {
  //   const hash = makeid(10);
  //   console.log(hash);
  //   fetchUser(endPoint).then((data) => {
  //     // console.log("Random data-->", endPoint.split("/")[1]);
  //     setUsers(data);
  //   });

  //   // setInterval(() => {
  //   // }, 2000);
  // }, []);

  // function sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  const destroyer = async (e) => {
    const cpunt = [0];
    let time = new Date();
    time.toLocaleTimeString();

    console.log("destroyer--> ", time);

    newArr.forEach(async (item) => {
      // console.log(item);
      const res = await fetchUser(item);
      // console.log(res);
      cpunt[0] += res.length;
      res.forEach(async (user, index) => {
        const id = makeid(10);
        const coll = item.split("/")[0];
        await setDocuments(coll, id, { ...user, capital: true });
        await writeUserData(coll, id, user);
        const q = query(collection(db, coll), where("capital", "==", true));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {});
      });
    });
    console.log(cpunt);
  };

  const getAllCollection = () => {
    console.log("getAllCollection-->");
  };

  useEffect(() => {
    getAllCollection();
    // destroyer();

    // return () => {
    //   clearInterval(int);
    // };
  }, []);

  return (
    <AppWrapper>
      {/* <LeftSidebar>
        <SideBar />
      </LeftSidebar>
      <MiddleSection>
        <MainApp />
      </MiddleSection>
      <RightSidebar>right section</RightSidebar> */}
    </AppWrapper>
  );
};

export default App;
