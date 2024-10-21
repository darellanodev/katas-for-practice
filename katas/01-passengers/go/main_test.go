package main

import "testing"

func TestCountPassengersAtLastTrainStation(t *testing.T) {

	data := [][]int{
		{5, 0},
		{7, 3},
		{2, 3},
	};

	expected := 5 + 7 + 2 - (0 + 3 + 3);

    result := countPassengersAtLastStation(data)
    if result != expected {
        t.Errorf("countPassengersAtLastStation(data) = %d, expected %d", result, expected)
    }
}