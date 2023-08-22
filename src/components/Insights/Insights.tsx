import React from "react";
import Paper from "@mui/material/Paper";
import { Avatar, Box, List, ListItem, ListItemAvatar } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

const Insights: React.FC = () => {
  return (
    <Paper
      sx={{
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      elevation={0}
      className="w-full mb-20 p-8 border-t-[0.2rem] border-opacity-30 border-gray-100 border-l-[0.4rem]"
    >
      <Box>
        <Box className="mb-6">
          <h1 className="text-5xl font-[700] tracking-tight">
            Zootools insights
          </h1>
          <p className="text-2xl font-[500] mt-1">
            Making analytics simple and actionable
          </p>
        </Box>

        <Box className="flex mb-8">
          <Box className="w-1/2 pr-4">
            <Box>
              <p className="text-2xl font-[700] tracking-tight">Summary</p>
            </Box>

            <List sx={{ marginLeft: "-1rem" }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <p className="text-base font-[700] tracking-tight">
                  SignUps are slowing down.&nbsp;
                </p>
                <p className="text-base font-[400] tracking-tight">
                  -5% new than last week
                </p>
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <p className="text-base font-[700] tracking-tight">80%&nbsp;</p>
                <p className="text-base font-[400] tracking-tight">
                  of signups were invited by members
                </p>
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <p className="text-base font-[700] tracking-tight">80%&nbsp;</p>
                <p className="text-base font-[400] tracking-tight">
                  of signups were invited by friends
                </p>
              </ListItem>
            </List>
          </Box>

          <Box className="w-1/2 ml-16">
            <Box>
              <p className="text-2xl font-[700] tracking-tight">
                Recommedations
              </p>
            </Box>

            <List sx={{ marginLeft: "-1rem" }}>
              <ListItem>
                <p className="text-base font-[700] tracking-tight">
                  Make sure you promote and share your form
                </p>
              </ListItem>

              <ListItem>
                <p className="text-base font-[700] tracking-tight">
                  Congrats! This is huge. Keep rewards your users
                </p>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Insights;
