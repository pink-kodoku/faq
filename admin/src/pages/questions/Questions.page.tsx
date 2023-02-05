import React from 'react';
import {Question} from "../../components/question";
import {Pagination, Stack} from "@mui/material";
import {CardsWrapper} from './questions.styles'
import {Layout} from "../../components/layout";

const questionsPage = [
  {
    id: 0,
    title: "Почему листья зеленые?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eveniet exercitationem quae! Autem cum eaque itaque nam quo rem ut."
  },
  {
    id: 1,
    title: "Почему солнце не падает на землю?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 2,
    title: "Зачем у нас именно 10 пальцев?",
    body: "Deserunt eveniet exercitationem quae! Autem cum eaque itaque nam quo rem ut."
  },
  {
    id: 3,
    title: "Существует ли на самом деле нуль?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eveniet exercitationem quae!"
  },
  {
    id: 4,
    title: "Существует ли на самом деле нуль?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eveniet exercitationem quae!"
  },
  {
    id: 5,
    title: "Существует ли на самом деле нуль?",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eveniet exercitationem quae!"
  },
]

export const QuestionsPage = () => {
  return (
    <Layout>
      <CardsWrapper sx={{my: 2}}>
        {questionsPage.map(qst => <Question key={qst.id} {...qst}/>)}
      </CardsWrapper>

      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </Layout>
  );
};
