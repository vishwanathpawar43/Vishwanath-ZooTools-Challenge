import React from "react";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

const Insights: React.FC = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        // height: "40vh",
        marginBottom: "5rem",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        borderTop: "0.2rem solid rgba(248, 248, 248, 0.3)",
        borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
        padding: "2rem",
      }}
      elevation={0}
    >
      <div>
        <Typography variant="h3" component="div">
          Zootools Insights
        </Typography>
        <Typography sx={{ mb: 4 }} variant="h6" component="div">
          Making Analytics Easy
        </Typography>

        <div className="flex">
          <div className="w-1/2 pr-4">
            <Typography variant="h6" component="div">
              Summary
            </Typography>
            <List sx={{ marginLeft: "-1rem" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Overview of website traffic" />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Overview of website traffic" />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Overview of website traffic" />
              </ListItem>
            </List>
          </div>

          <div className="w-1/2 pl-4">
            <Typography variant="h6" component="div">
              Recommedations
            </Typography>
            <List sx={{ marginLeft: "-1rem" }}>
              <ListItem>
                <ListItemText primary="Overview of website traffic" />
              </ListItem>

              <ListItem>
                <ListItemText primary="Overview of website traffic" />
              </ListItem>

              <ListItem>
                <ListItemText primary="Overview of website traffic" />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Insights;
