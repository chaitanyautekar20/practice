import pygame

# Initialize pygame
pygame.init()

# Set screen dimensions
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Circle with Quadrants")

# Define colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Circle properties
radius = 100
center = (WIDTH // 2, HEIGHT // 2)

# Main loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Fill screen with white
    screen.fill(WHITE)

    # Draw quadrants (vertical and horizontal lines)
    pygame.draw.line(screen, BLACK, (WIDTH // 2, 0), (WIDTH // 2, HEIGHT), 2)  # Vertical line
    pygame.draw.line(screen, BLACK, (0, HEIGHT // 2), (WIDTH, HEIGHT // 2), 2)  # Horizontal line

    # Draw circle with only a black border (empty inside)
    pygame.draw.circle(screen, BLACK, center, radius, 2)  # Width 2 makes it an outline

    # Update display
    pygame.display.flip()

# Quit pygame
pygame.quit()
