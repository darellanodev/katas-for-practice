<?php

require ('src/PassengersManager.php');

use PHPUnit\Framework\TestCase;

class PassengersManagerTest extends TestCase {
    public function testCalculate(): void {
        $passengersManager = new PassengersManager();

        $data = [
            [5, 0],
            [7, 3],
            [2, 3],
        ];

        $actual = $passengersManager->countPassengersAtLastStation($data);

        $expected = 5 + 7 + 2 - (0 + 3 + 3);
        $this->assertEquals($actual, $expected);
    }
}