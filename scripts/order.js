#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";

start();

async function start() {
	const listFile = await readFile("./src/words.txt", "utf-8");
	const words = listFile.split("\n").filter(Boolean);
	const uniqueWords = Array.from(new Set(words));
	const orderedWords = uniqueWords.sort((a, b) => a.localeCompare(b));
	await writeFile("./src/words.txt", orderedWords.join("\n") + "\n");
}
