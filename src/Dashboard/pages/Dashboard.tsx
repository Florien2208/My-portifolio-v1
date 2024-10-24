import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  CreditCard,
  ShoppingCart,
  ChevronRight,
  MoreVertical,
} from "lucide-react";
import { ThemeContext } from "../../components/constants/ThemeContext";


const salesData = [
  { name: "Jan", value: 500 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 400 },
  { name: "Apr", value: 300 },
  { name: "May", value: 200 },
  { name: "Jun", value: 400 },
  { name: "Jul", value: 300 },
  { name: "Aug", value: 400 },
  { name: "Sep", value: 300 },
  { name: "Oct", value: 400 },
  { name: "Nov", value: 500 },
  { name: "Dec", value: 400 },
];

const Dashboard: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const cardBg = isDarkMode ? "bg-[#111c44]/50" : "bg-white";
  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-[#707eae]" : "text-gray-500";
  const chartBg = isDarkMode ? "#111c44" : "#ffffff";
  const chartBorder = isDarkMode ? "#1a2c6b" : "#e5e7eb";
  const progressBg = isDarkMode ? "bg-[#1a2c6b]" : "bg-gray-200";
  const iconBg = isDarkMode ? "bg-[#1a2c6b]/40" : "bg-gray-100";

  return (
    <>
      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-6 mb-6 mt-16">
        {[
          {
            title: "Today's Money",
            value: "$53,000",
            change: "+55%",
            icon: "dollar",
          },
          {
            title: "Today's Users",
            value: "2,300",
            change: "+5%",
            icon: "users",
          },
          {
            title: "New Clients",
            value: "+3,052",
            change: "-14%",
            icon: "clients",
          },
          {
            title: "Total Sales",
            value: "$173,000",
            change: "+8%",
            icon: "sales",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className={`${cardBg} backdrop-blur-xl rounded-2xl p-6 shadow-sm`}
          >
            <div className="flex justify-between">
              <div>
                <p className={`${textSecondary} text-sm mb-1`}>{stat.title}</p>
                <h3 className={`${textPrimary} text-xl font-bold mb-1`}>
                  {stat.value}
                </h3>
                <span
                  className={`text-sm ${
                    stat.change.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="bg-[#0075ff]/10 rounded-xl p-3">
                <svg
                  className="text-[#0075ff]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome, Satisfaction, and Referral Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Welcome Card */}
        <div
          className={`${cardBg} backdrop-blur-xl rounded-2xl p-6 relative overflow-hidden shadow-sm`}
        >
          <div className="relative z-10">
            <p className={textSecondary}>Welcome back,</p>
            <h2 className={`${textPrimary} text-2xl font-bold mb-2`}>
              Mark Johnson
            </h2>
            <p className={textSecondary}>Glad to see you again!</p>
            <p className={textSecondary}>Ask me anything.</p>
            <button className="text-[#0075ff] flex items-center gap-2 mt-4">
              <span>Tap to record</span>
              <ChevronRight size={16} />
            </button>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQDTp7Q6Gth78YiMe7YyURgS3yq7ZDM2bwA&s"
            alt="Placeholder"
            className="absolute right-0 bottom-0 w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Satisfaction Rate */}
        <div className={`${cardBg} backdrop-blur-xl rounded-2xl p-6 shadow-sm`}>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 mb-4">
              <svg className="transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={isDarkMode ? "#1a2c6b" : "#e5e7eb"}
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#0075ff"
                  strokeWidth="10"
                  strokeDasharray="283"
                  strokeDashoffset="14"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-4xl font-bold ${textPrimary}`}>95%</span>
              </div>
            </div>
            <h3 className={`${textPrimary} text-lg mb-2`}>Satisfaction Rate</h3>
            <p className={`${textSecondary} text-sm`}>From all projects</p>
          </div>
        </div>

        {/* Referral Tracking */}
        <div className={`${cardBg} backdrop-blur-xl rounded-2xl p-6 shadow-sm`}>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className={`${textPrimary} mb-4`}>Referral Tracking</h4>
              <div className="space-y-2">
                <p className={textSecondary}>Invited</p>
                <p className={`${textPrimary} font-semibold`}>145 people</p>
              </div>
              <div className="mt-4">
                <p className={textSecondary}>Bonus</p>
                <p className={`${textPrimary} font-semibold`}>1,465</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-5xl font-bold text-green-400">9.3</span>
              <p className={`${textSecondary} text-sm`}>Total Score</p>
            </div>
          </div>
          <div className={`w-full ${progressBg} rounded-full h-2`}>
            <div
              className="bg-green-400 h-2 rounded-full"
              style={{ width: "93%" }}
            />
          </div>
        </div>
      </div>

      {/* Sales Overview Chart */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div
          className={`col-span-2 ${cardBg} backdrop-blur-xl rounded-2xl p-6 shadow-sm`}
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className={`${textPrimary} text-lg mb-1`}>Sales overview</h3>
              <p className={textSecondary}>(+5) more in 2021</p>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis
                  dataKey="name"
                  stroke={isDarkMode ? "#707eae" : "#6b7280"}
                  axisLine={false}
                  tickLine={false}
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis
                  stroke={isDarkMode ? "#707eae" : "#6b7280"}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: chartBg,
                    borderColor: chartBorder,
                    borderRadius: "10px",
                    color: isDarkMode ? "#fff" : "#111827",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0075ff"
                  strokeWidth={3}
                  dot={false}
                />
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#0075ff" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0075ff" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active Users */}
        <div className={`${cardBg} backdrop-blur-xl rounded-2xl p-6 shadow-sm`}>
          <div className="mb-6">
            <h3 className={`${textPrimary} text-lg mb-1`}>Active Users</h3>
            <p className="text-green-400 text-sm">(+23) than last week</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Users />, label: "Users", value: "32,984" },
              { icon: <CreditCard />, label: "Clicks", value: "2.42m" },
              { icon: <ShoppingCart />, label: "Sales", value: "2,400$" },
              { icon: <Box />, label: "Items", value: "320" },
            ].map((item, index) => (
              <div key={index} className={`p-4 rounded-xl ${iconBg}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#0075ff]/20">
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className: "w-5 h-5 text-[#0075ff]",
                    })}
                  </div>
                  <span className={textSecondary}>{item.label}</span>
                </div>
                <p className={`${textPrimary} text-lg font-semibold`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="grid grid-cols-2 gap-6">
        {/* Projects */}
        <div className={`${cardBg} backdrop-blur-xl rounded-2xl p-6 shadow-sm`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className={`${textPrimary} text-lg`}>Projects</h3>
            <p className="text-green-400 text-sm">30 done this month</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th
                    className={`text-left ${textSecondary} text-sm font-normal pb-4`}
                  >
                    COMPANIES
                  </th>
                  <th
                    className={`text-left ${textSecondary} text-sm font-normal pb-4`}
                  >
                    MEMBERS
                  </th>
                  <th
                    className={`text-left ${textSecondary} text-sm font-normal pb-4`}
                  >
                    BUDGET
                  </th>
                  <th
                    className={`text-left ${textSecondary} text-sm font-normal pb-4`}
                  >
                    COMPLETION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}
                      >
                        <Box className="w-6 h-6 text-[#0075ff]" />
                      </div>
                      <span className={textPrimary}>
                        Chakra Soft UI Version
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full ${iconBg} border-2 ${
                            isDarkMode ? "border-[#111c44]" : "border-white"
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className={textPrimary}>$14,000</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className={`flex-1 h-2 rounded-full ${progressBg}`}>
                        <div
                          className="h-full rounded-full bg-[#0075ff]"
                          style={{ width: "60%" }}
                        />
                      </div>
                      <span className={textPrimary}>60%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders Overview */}
        <div className={`${cardBg} backdrop-blur-xl rounded-2xl p-6 shadow-sm`}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className={`${textPrimary} text-lg`}>Orders overview</h3>
              <p className="text-green-400 text-sm">+30% this month</p>
            </div>
            <button>
              <MoreVertical className={textSecondary} />
            </button>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0075ff]/20 flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-[#0075ff]" />
              </div>
              <div>
                <p className="text-white">$2400, Design changes</p>
                <p className="text-[#707eae] text-sm">22 DEC 7:20 PM</p>
              </div>
            </div>
            {/* Add more order items as needed */}
          </div>
        </div>
      </div>
    </>
  );
};
const Box: React.FC<{ className?: string }> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);
export default Dashboard;
