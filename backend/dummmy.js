//this is only for adding dummy data in database
// app.get("/addHoldings", (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     let newholding = new HoldingModel({
//       name: item.name,
//       qty: item.qty,

//       avg: item.avg,
//       price: item.price,

//       net: item.net,

//       day: item.day,
//     });
//     newholding.save();
//   });
//   res.json("Done");
// });

// app.get("/position", async (req, res) => {
//   try {
//     // prevent duplicate insert
//     const count = await PositionModel.countDocuments();

//     if (count > 0) {
//       return res.json({
//         message: "Positions already exist. Skipping insert.",
//         count,
//       });
//     }

//     const tempPosition = [
//       {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//       {
//         product: "MIS",
//         name: "TCS",
//         qty: 5,
//         avg: 3450.5,
//         price: 3520.0,
//         net: "+2.01%",
//         day: "+0.85%",
//         isLoss: false,
//       },
//       {
//         product: "CNC",
//         name: "INFY",
//         qty: 10,
//         avg: 1450.0,
//         price: 1422.3,
//         net: "-1.90%",
//         day: "-0.60%",
//         isLoss: true,
//       },
//     ];

//     await PositionModel.insertMany(tempPosition);

//     res.json({
//       message: "Positions inserted successfully",
//       inserted: tempPosition.length,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error inserting positions",
//       error: error.message,
//     });
//   }
// });
