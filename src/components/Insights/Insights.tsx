import React from "react";
import Paper from "@mui/material/Paper";
import { Box, List, ListItem } from "@mui/material";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

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

        <Box className="flex flex-col mb-8 md:flex-row">
          <Box className="w-full md:w-1/2 md:pr-4">
            <Box>
              <p className="text-2xl font-[700] tracking-tight">Summary</p>
            </Box>

            <List sx={{ marginLeft: "-1rem" }}>
              <ListItem>
                <MdArrowDropDown className="bg-[#FF6347] text-[2.5rem] rounded-lg mr-4 p-2 text-white" />

                <p className="text-base tracking-tight">
                  <span className="font-[700]">
                    SignUps are slowing down.&nbsp;
                  </span>
                  <span className="font-[400]">-5% new than last week</span>
                </p>
              </ListItem>

              <ListItem>
                <MdArrowDropUp className="bg-[#4AFF00] text-[2.5rem] rounded-lg mr-4 p-2 text-white" />

                <p className="text-base tracking-tight">
                  <span className="font-[700]">80%&nbsp;</span>
                  <span className="font-[400]">
                    of signups were invited by members
                  </span>
                </p>
              </ListItem>

              <ListItem>
                <HiOutlineLightBulb className="bg-yellow-300 text-[2.5rem] rounded-lg mr-4 p-2" />
                <p className="text-base tracking-tight">
                  <span className="font-[700]">80%&nbsp;</span>
                  <span className="font-[400]">
                    of signups were invited by friends
                  </span>
                </p>
              </ListItem>

              <ListItem>
                <HiOutlineLightBulb className="bg-yellow-300 text-[2.5rem] rounded-lg mr-4 p-2" />
                <p className="text-base tracking-tight">
                  <span className="font-[700]">80%&nbsp;</span>
                  <span className="font-[400]">
                    of signups were invited by friends
                  </span>
                </p>
              </ListItem>
            </List>
          </Box>

          <Box className="w-full mt-10 md:mt-0 md:w-1/2 md:ml-16">
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
