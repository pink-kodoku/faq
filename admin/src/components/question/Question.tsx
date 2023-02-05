import React from 'react';
import {Typography} from "@mui/material";
import {Card} from './question.styles'
import Link from "../link/Link"

interface Props {
  id: number;
  title: string;
  body: string;
}

export const Question: React.FC<Props> = ({id, title, body}) => {
  return (
    <Card>
      <Link to={`/question/${id}`}><Typography sx={{mb: 2}}>{title}</Typography></Link>
      <Typography variant="body1">{body}</Typography>
    </Card>
  );
};

