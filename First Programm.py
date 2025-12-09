while True:
    print(f"\nRunde {round_no}:")
    player = get_player_choice()
    if player is None:
        break

    computer = random.choice(CHOICES)
    print(f"Du: {player}  | Computer: {computer}")

    result = determine_winner(player, computer)
    if result == "unentschieden":
        print("Unentschieden!")
    elif result == "player":
        print("Du gewinnst diese Runde!")
        player_score += 1
    else:
        print("Computer gewinnt diese Runde.")
        computer_score += 1

    print(f"Zwischenstand — Du: {player_score}  Computer: {computer_score}")

    again = input("Nochmal spielen? (j/n): ").strip().lower()
    if again != "j":
        break
    round_no += 1

print("\nSpiel beendet.")
print(f"Endstand — Du: {player_score}  Computer: {computer
