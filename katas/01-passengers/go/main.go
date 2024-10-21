package main

import "fmt"

const UP int = 0
const DOWN int = 1

func countPassengersAtLastStation(data [][]int) int {

	upPassengers := 0
	downPassengers := 0
	for _, station := range data {
		upPassengers += station[UP]
		downPassengers += station[DOWN]
	}
	return upPassengers - downPassengers
}

func main() {

	data := [][]int{
		{5, 0},
		{7, 3},
		{2, 3},
	};

	result := countPassengersAtLastStation(data)

    fmt.Printf("result = %d", result)
}