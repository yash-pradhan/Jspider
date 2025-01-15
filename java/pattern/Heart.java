class Heart {
    public static void main(String[] args) {
        int size = 15; // Size of the heart

        for (int y = size; y >= -size; y--) {
            for (int x = -2 * size; x <= 2 * size; x++) {
                double xVal = x / (double) size;  // Scale x-coordinate
                double yVal = y / (double) size;  // Scale y-coordinate

                // Heart equation: (x^2 + y^2 - 1)^3 - x^2 * y^3 <= 0
                if (Math.pow(Math.pow(xVal, 2) + Math.pow(yVal, 2) - 1, 3) - Math.pow(xVal, 2) * Math.pow(yVal, 3) <= 0) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println(); // Move to the next line after each row
        }
    }
}
