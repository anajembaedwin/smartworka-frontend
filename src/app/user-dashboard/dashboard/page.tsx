'use client'
import { Card,CardTitle,CardContent,CardHeader,CardDescription } from "@/components/ui/card";
import { DatePicker } from "./components/date-picker";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import LineChart from "./components/line-chart";
import { MdOutlineMoreVert } from "react-icons/md";


const tableData = [
  {
    date: 'Feb 05, 2024 | 9:00 AM',
    customerName: 'Tanimowo Adeola',
    gateWay:'Kuda Bank',
    amount: '₦2,000',
    category:'Subcription',
    status:'Pending',
    icons: <MdOutlineMoreVert />,
  },
  {
    date: 'Feb 05, 2024 | 9:00 AM',
    customerName: 'Tanimowo Adeola',
    gateWay:'Kuda Bank',
    amount: '₦2,000',
    category:'Subcription',
    status:'Pending',
    icons: <MdOutlineMoreVert />,
  },
    {
    date: 'Feb 05, 2024 | 9:00 AM',
    customerName: 'Tanimowo Adeola',
    gateWay:'Kuda Bank',
    amount: '₦2,000',
    category:'Subcription',
    status:'Pending',
    icons: <MdOutlineMoreVert />,
  },
  {
    date: 'Feb 05, 2024 | 9:00 AM',
    customerName: 'Tanimowo Adeola',
    gateWay:'Kuda Bank',
    amount: '₦2,000',
    category:'Subcription',
    status:'Pending',
    icons: <MdOutlineMoreVert />,
  },
  {
    date: 'Feb 05, 2024 | 9:00 AM',
    customerName: 'Tanimowo Adeola',
    gateWay:'Kuda Bank',
    amount: '₦2,000',
    category:'Subcription',
    status:'Pending',
    icons: <MdOutlineMoreVert />,
  },
  {
    date: 'Feb 05, 2024 | 9:00 AM',
    customerName: 'Tanimowo Adeola',
    gateWay:'Kuda Bank',
    amount: '₦2,000',
    category:'Subcription',
    status:'Pending',
    icons: <MdOutlineMoreVert />,
  },
  {
    date: 'Feb 05, 2024 | 9:00 AM',
    customerName: 'Tanimowo Adeola',
    gateWay:'Kuda Bank',
    amount: '₦2,000',
    category:'Subcription',
    status:'Pending',
    icons: <MdOutlineMoreVert />,
  },
]

export default function Page() {
  return (

    <ScrollArea className="px-4 h-[90vh] rounded-md border">
      <main>
        <section className="space-y-3">
        <article className="pt-3">
          <h1 className="text-lg text-blue-700">Hello, Edwin</h1>
          <p className="text-sm text-gray-400">
            You are currently using a business account
          </p>
        </article>
        <article className="flex justify-between items-center px-3">
          <div>
          <h1 className="text-2xl">Overview</h1>
          </div>
          <DatePicker/> 
        </article>
      </section>
      <section className="grid grid-cols-4 gap-4 py-6">
        <Card className="w-full h-[196px]">
          <section className="pt-4 space-y-3 px-3">
            <img src="/dash-icon-1.svg" alt="dash-icon" className=" size-12" />
            <p className="text-md text-gray-500">Total Budget</p>
            <h2 className="text-2xl">₦7,179,784.00</h2>
            <span className="text-[10px] flex items-center">
              <ArrowUpRight className=" text-green-500 text-[10px]" />
              12% increase from last month
            </span>
          </section>
        </Card>
        <Card className="w-full h-[196px]">
          <section className="pt-4 space-y-3 px-3">
            <img src="/dash-icon-2.svg" alt="dash-icon" className=" size-12" />
            <p className="text-md text-gray-500">Project</p>
            <h2><small className="text-2xl">95</small> <small className="text-lg">/100</small></h2>
            <span className="text-[10px] flex items-center">
            <ArrowDownRight  className=" text-red-500 text-[10px]" />
              10% decrease from last month
            </span>
          </section>
        </Card>
        <Card className="w-full h-[196px]">
        <section className="pt-4 space-y-3 px-3">
            <img src="/dash-icon-3.svg" alt="dash-icon" className=" size-12" />
            <p className="text-md text-gray-500">Transaction Count</p>
            <h2 className="text-2xl">1022</h2>
            <span className="text-[10px] flex items-center">
              <ArrowUpRight className=" text-green-500 text-[10px]" />
              8% increase from last month
            </span>
          </section>
        </Card>
        <Card className="w-full h-[196px]">
        <section className="pt-4 space-y-3 px-3">
            <img src="/dash-icon-4.svg" alt="dash-icon" className=" size-12" />
            <p className="text-md text-gray-500">Resources</p>
            <h2><small className="text-2xl">101</small> <small className="text-lg">/120</small></h2>
            <span className="text-[10px] flex items-center">
              <ArrowUpRight className=" text-green-500 text-[10px]" />
              2% increase from last month
            </span>
          </section>
        </Card>
      </section>
      <section className="py-3">
        <Card className="px-6 py-6">
         <LineChart/>
        </Card>
      </section>
      <section>
          <Card>
                  <CardHeader className="px-7">
                    <CardTitle></CardTitle>
                    <CardDescription>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-gray-400 sm:table-cell">Date | Time</TableHead>
                          <TableHead className="text-gray-400 sm:table-cell">
                            Customer Name
                          </TableHead>
                          <TableHead className=" text-gray-400 sm:table-cell">
                            Gateway
                          </TableHead>
                          <TableHead className="text-gray-400 md:table-cell">
                            Amount
                          </TableHead>
                          <TableHead className=" text-gray-400 md:table-cell">
                            Category
                          </TableHead>
                          <TableHead className=" text-gray-400 md:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="text-right sr-only">Option</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                {tableData.map((data) => (
                        <TableRow className="bg-accent" key={data.date}>
                          <TableCell>
                            <div className=" text-gray-400">{data.date}</div> 
                          </TableCell>
                          <TableCell className="sm:table-cell">
                            {data.customerName}
                          </TableCell>
                          <TableCell className="sm:table-cell">
                           <div className=" text-gray-400">{data.gateWay}</div>
                          </TableCell>
                         <TableCell className="sm:table-cell">
                           <div className=" text-blue-700">{data.amount}</div>
                          </TableCell>
                          <TableCell className="sm:table-cell">
                           <div className=" text-gray-400">{data.category}</div>
                          </TableCell>
                          <TableCell className="sm:table-cell">
                             <div className="bg-orange-100 text-orange-400 w-fit px-2 py-2 text-xs rounded">
                              {data.status}
                             </div>
                          </TableCell>
                          <TableCell className="text-right">
                           {data.icons}
                    </TableCell>
                        </TableRow> ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
      </section>
</main>
</ScrollArea>
  );
}
