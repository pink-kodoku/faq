import React from 'react';
import {Typography} from "@mui/material";

interface Props {
  id: number;
  title: string;
}

const Category: React.FC<Props> = ({id, title}) => {
  return (
    <div>
      <div>Category</div>
      <Typography variant="h2">{title}</Typography>
    </div>
  );
};

export default Category;