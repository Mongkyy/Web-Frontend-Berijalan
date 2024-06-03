"use client";

import React from "react";
import { Avatar, Button, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Logout, Home, ListAlt, Calculate } from "@mui/icons-material";
import Image from "next/image";
import { postLogout } from "@/services/api/apiLogout";
import { useRouter } from "next/navigation";  
import Picture1 from "../assets/images/logo.png";
import Picture2 from "../assets/images/todo.png";
import Picture3 from "../assets/images/calc.png";
import EmptyPicture from "../assets/images/empty.png";

const menuItems = [
  { text: "Homepage", icon: <Home />, active: true },
  { text: "To Do List", icon: <ListAlt />, active: false },
  { text: "Calculator", icon: <Calculate />, active: false },
  { text: "...", icon: null, active: false },
  { text: "Coming Soon!", icon: null, active: false },
  { text: "Coming Soon!", icon: null, active: false },
  { text: "...", icon: null, active: false },
];

const contentItems = [
  { id: 1, title: "To Do List", image: Picture2, buttonText: "View More", onClick: "/use/todo" },
  { id: 2, title: "Calculator", image: Picture3, buttonText: "View More", onClick: "/use/calculator" }, 
  { id: 3, title: "Coming Soon", image: EmptyPicture, buttonText: "View More" },
  { id: 4, title: "Coming Soon", image: EmptyPicture, buttonText: "View More" },
  { id: 5, title: "Coming Soon", image: EmptyPicture, buttonText: "View More" },
  { id: 6, title: "Coming Soon", image: EmptyPicture, buttonText: "View More" },
];

export default function HomePage() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await postLogout();
    if (res.status === 200) {
      router.push("/login");
    } else {
      console.error("Failed to logout");
    }
  };

  return (
    <div className="relative flex h-screen bg-neutral overflow-hidden">
      <aside className="flex flex-col justify-between bg-white" style={{ width: "240px", height: "100vh", padding: "40px 12px", borderRight: "1px solid neutral" }}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2" style={{ width: "216px", height: "40px", padding: "8px 12px" }}>
            <Avatar src="/path-to-avatar.jpg" sx={{ width: 40, height: 40 }} />
            <p className="text-lg font-bold">Username</p>
          </div>
          <List component="nav" className="flex-grow">
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                selected={item.active}
                className={`${item.active ? "bg-highlight" : ""}`}
                style={{ width: "216px", height: "40px", padding: "8px 12px", gap: "8px" }}
              >
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.text} />
              </ListItem>            
            ))}
          </List>
        </div>
        <Button
          onClick={handleLogout}
          variant="contained"
          className="bg-greenPrimary"
          startIcon={<Logout />}
          style={{ marginTop: "auto" }}
        >
          Logout
        </Button>
      </aside>
      <main className="home-content-container flex-1 p-6">
        <div className="flex justify-between items-center mb-9">
          <p className="text-xs">Home</p>
          <p className="text-xs">Berijalan member of Astra</p>
        </div>
        <div className="banner flex justify-center items-center p-12 mb-12" style={{ border: "25px solid white", borderRadius: "12px" }}>
          <div className="overflow-hidden rounded-lg">
            <Image src={Picture1} layout="intrinsic" width={380} height={150} />
          </div>
        </div>
        <div className="content-container bg-white p-8 rounded-lg">
          <div className="content-grid grid grid-cols-3 gap-4">
            {contentItems.map((item) => (
              <div key={item.id} className="content-item p-6 flex flex-col items-center bg-neutral rounded-lg">
                <p className="mb-4 font-bold">{item.title}</p>
                <Image src={item.image} layout="intrinsic" width={100} height={40} />
                <Button 
                  onClick={() => item.onClick && router.push(item.onClick)}
                  variant="contained" className="mt-4 bg-greenPrimary">
                  {item.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
