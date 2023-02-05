import {styled} from "@mui/material";
import {Link} from "react-router-dom";

export const LinkStyles = styled(Link)(({theme}) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}));