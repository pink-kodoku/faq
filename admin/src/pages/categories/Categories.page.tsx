import React from 'react';
import {Container} from "@mui/material";
import Category from "../../components/category/Category";

const categories = [
  {
    id: 0,
    title: "Category 1"
  },
  {
    id: 1,
    title: "Category 2"
  },
  {
    id: 2,
    title: "Category 3"
  }
]

export const CategoriesPage = () => {
  return (
    <Container>
      {categories.map(ctg => <Category key={ctg.id} {...ctg}/>)}
    </Container>
  );
};