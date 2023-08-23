import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
import "./BarGraph.css";

interface DataPoint {
  name: string;
  value: number;
  height: number;
  width: number;
  x: number;
  y: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: { name: string; value: number } }>;
  label?: string;
}

interface FormattedDataItem {
  name: string;
  value: number;
}

// custom tool tip

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <Box className="custom-tooltip flex flex-col items-center justify-center">
        <p className="font-bold">
          <span className="text-xl font-extrabold">{`${data.value}`}</span>{" "}
          signups
        </p>
        <p className="text-gray-400 font-bold">{data.name}</p>
      </Box>
    );
  }
  return null;
};

interface BarGraphProps {
  data: FormattedDataItem[];
}

const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
  const [position, setPosition] = useState<{
    data: DataPoint;
    show: boolean;
  } | null>(null);

  useEffect(() => {
    const tooltip = document.querySelector(
      ".recharts-tooltip-wrapper"
    ) as HTMLElement;
    if (!tooltip) return;
    const tooltipHeight = tooltip.getBoundingClientRect().height;
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    const spaceForLittleTriangle = 10;

    const w = position?.data.width ? position?.data.width : 0;
    tooltip.style.cssText = `
          transform: translate(${position?.data.x}px, ${position?.data.y}px);
          pointer-events: none;  position: absolute;
          top: -${tooltipHeight + spaceForLittleTriangle}px;
          left: -${tooltipWidth / 2 - w / 2}px;
          opacity: ${position?.show ? "1" : 0};
          transition: all 400ms ease 0s;
        `;
  }, [position]);

  return (
    <Paper
      sx={{
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      className="w-full mb-12 p-8 border-t-[0.2rem] border-opacity-30 border-gray-100 border-l-[0.4rem]"
      elevation={0}
    >
      <Box className="mb-8">
        <Box className="flex items-center ">
          <h1 className="text-3xl font-[800]">100,000</h1>
          <PeopleOutlineIcon
            sx={{
              fontSize: 35,
              marginLeft: "0.5rem",
              marginBottom: "0.1rem",
            }}
          />
        </Box>

        <Box>
          <p className="text-2xl font-[600]">Participants</p>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to top, rgba(245, 245, 245, 0.5) 2px, transparent 1px)",
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
                return setPosition({ data: data, show: true });
              }}
              onMouseLeave={(data) => setPosition({ data: data, show: false })}
            ></Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default BarGraph;
