import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    // Correct path for your project structure
    const filePath = path.join(
      process.cwd(),
      "src",
      "app",
      "data",
      "products.json",
    );

    console.log("Trying to read from:", filePath);

    // Read the file
    const data = await fs.readFile(filePath, "utf-8");

    // Parse JSON
    const products = JSON.parse(data);

    console.log("Successfully loaded products:", products.length);

    // Return successful response using NextResponse
    return NextResponse.json(products, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (err) {
    // Log detailed error for debugging
    console.error("Error loading products:", err);
    console.error("Current working directory:", process.cwd());
    console.error(
      "Attempted path:",
      path.join(process.cwd(), "src", "app", "data", "products.json"),
    );

    // Return error response
    return NextResponse.json(
      {
        error: "Failed to load products",
        message: err.message,
        cwd: process.cwd(),
        attemptedPath: path.join(
          process.cwd(),
          "src",
          "app",
          "data",
          "products.json",
        ),
      },
      { status: 500 },
    );
  }
}
