import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, Label } from "recharts";
import "./SignUpGraph.css";
import { Paper, Typography } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline"; // import data from "../../Data/Data";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { value: number } }>;
  label?: string;
}

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
  return (
    <Paper
      sx={{
        width: "100%",
        marginBottom: "3rem",
        padding: "2rem",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        borderTop: "0.2rem solid rgba(248, 248, 248, 0.3)",
        borderLeft: "0.4rem solid rgba(248, 248, 248, 0.3)",
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 245, 245, 0.5) 1px, transparent 1px)",
        backgroundSize: "80% 2.5rem",
        backgroundPosition: "center top", // Start the lines from top
      }}
      elevation={0}
    >
      <Typography
        variant="h3"
        component="div"
        display="flex"
        alignItems="center"
      >
        <span>100,000</span>
        <PeopleOutlineIcon sx={{ fontSize: 50, marginLeft: "0.5rem" }} />
      </Typography>

      <Typography variant="h6" component="div" sx={{ marginLeft: "0.5rem" }}>
        participants
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar
            dataKey="value"
            fill="#FFDF00"
            barSize={17}
            radius={[6, 6, 6, 6]}
          >
            <Label
              content={(props) => {
                return <text>{`${props.value} Signups`}</text>;
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default SignUpGraph;
