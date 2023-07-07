import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Chore } from "../../../models/Chore";
import './Card.css';

function CardListItem({ id, title, description }: Chore) {
  return (
    <div className="card">
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
    </div>
  );
}

export default CardListItem;