import React, { Fragment, useEffect, useState } from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, Label } from "recharts";
import "./SignUpGraph.css";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const data = [
  { day: 1, value: 2 },
  { day: 2, value: 4 },
  { day: 3, value: 5 },
  { day: 4, value: 3 },
  { day: 1, value: 6 },
  { day: 2, value: 4 },
  { day: 3, value: 5 },
  { day: 4, value: 4 },
  { day: 1, value: 5 },
  { day: 2, value: 7 },
  { day: 3, value: 5 },
  { day: 4, value: 6 },
  { day: 1, value: 5 },
  { day: 2, value: 4 },
  { day: 3, value: 5 },
  { day: 4, value: 3 },
  { day: 1, value: 4 },
  { day: 2, value: 6 },
  { day: 3, value: 7 },
  { day: 4, value: 8 },
  { day: 1, value: 9 },
  { day: 2, value: 10 },
  { day: 3, value: 11 },
  { day: 4, value: 12 },
  { day: 1, value: 13 },
  { day: 2, value: 17 },
  { day: 3, value: 14 },
  { day: 4, value: 18 },
  { day: 1, value: 19 },
  { day: 2, value: 20 },
  { day: 3, value: 21 },
  { day: 4, value: 24 },
  { day: 1, value: 22 },
  { day: 2, value: 25 },
  { day: 3, value: 30 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { value: number } }>;
  label?: string;
}
const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="label">Date: {label}</p>
        <p className="intro">{`${data.value} Signups`}</p>
      </div>
    );
  }
  return null;
};

const SignUpGraph = () => {
  const [position, setPosition] = useState<{
    data: any;
    show: boolean;
  } | null>(null);

  useEffect(() => {
    const tooltip = document.querySelector(".recharts-tooltip-wrapper");
    if (!tooltip) return;
    // Init tooltip values
    const tooltipHeight = tooltip.getBoundingClientRect().height;
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    const spaceForLittleTriangle = 10;

    // Rewrite tooltip styles
    tooltip.style = `
          transform: translate(${position?.data.x}px, ${position?.data.y}px);
          pointer-events: none;  position: absolute;
          top: -${tooltipHeight + spaceForLittleTriangle}px;
          left: -${tooltipWidth / 2 - position?.data.width / 2}px;
          opacity: ${position?.show ? "1" : 0};
          transition: all 400ms ease 0s;
        `;
  }, [position]);

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "3rem",
          // border:"1px solid red"
        }}
      >
        <Typography variant="h4" component="div" className="pt-4">
          Summer referral competition
        </Typography>
        <Paper
          sx={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
            borderTop: "0.4rem solid rgba(248, 248, 248, 0.3)",
            borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
            borderRight: "0.4rem solid rgba(248, 248, 248, 0.3)",
            borderBottom: "0.4rem solid rgba(248, 248, 248, 0)",
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            paddingY: "0.2rem",
            paddingX: "0.3rem",
          }}
          elevation={0}
        >
          <Stack spacing={1.5} direction="row">
            <Button
              variant="text"
              sx={{
                backgroundColor: "#F8F8FF",
                borderRadius: "0.75rem",
                marginLeft: "2rem",
                color: "#808080",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ textTransform: "none" }}
              >
                1h
              </Typography>
            </Button>

            <Button
              variant="text"
              sx={{
                backgroundColor: "#F8F8FF",
                borderRadius: "0.75rem",
                color: "#808080",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ textTransform: "none" }}
              >
                24h
              </Typography>
            </Button>

            <Button
              variant="text"
              sx={{
                backgroundColor: "#F8F8FF",
                borderRadius: "0.75rem",
                color: "#808080",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ textTransform: "none" }}
              >
                30d
              </Typography>
            </Button>

            <Button
              variant="text"
              sx={{
                backgroundColor: "#F8F8FF",
                borderRadius: "0.75rem",
                color: "#808080",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ textTransform: "none" }}
              >
                60d
              </Typography>
            </Button>
          </Stack>
        </Paper>
      </Box>

      <Paper
        sx={{
          width: "100%",
          marginBottom: "3rem",
          padding: "2rem",
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
          borderTop: "0.2rem solid rgba(248, 248, 248, 0.3)",
          borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
        }}
        elevation={0}
      >
        <Box>
          <Typography
            variant="h4"
            component="div"
            display="flex"
            alignItems="center"
          >
            <span>100,000</span>
            <PeopleOutlineIcon
              sx={{
                fontSize: 40,
                marginLeft: "0.5rem",
                marginBottom: "0.2rem",
              }}
            />
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft: "0.5rem" }}
          >
            Participants
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(to top, rgba(245, 245, 245, 0.6) 2px, transparent 1px)",
            backgroundSize: "80% 2.5rem",
            backgroundPosition: "center bottom",
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <Tooltip
                content={<CustomTooltip />}
                cursor={false}
                position={{
                  // Static position
                  x: position?.data.x ?? 0,
                  y: position?.data.y ?? 0,
                }}
              />
              <Bar
                dataKey="value"
                fill="#ffd700"
                barSize={17}
                radius={[6, 6, 6, 6]}
                onMouseMove={(data) => {
                  // console.log(data);
                  return setPosition({ data: data, show: true });
                }}
                onMouseLeave={(data) =>
                  setPosition({ data: data, show: false })
                }
              >
                <Label
                  position="top"
                  content={(props) => {
                    return <text>{`${props.value} Signups`}</text>;
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default SignUpGraph;
