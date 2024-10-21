package main

import "fmt"

func countPassengersAtLastStation(data [][]int) int {

	upPassengers := 0
	downPassengers := 0
	for _, station := range data {
		upPassengers += station[0]
		downPassengers += station[1]
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