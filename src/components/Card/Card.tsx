import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Chore } from "../../models/Chore";

function CardListItem({id, title, description}: Chore) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}

export default CardListItem;
