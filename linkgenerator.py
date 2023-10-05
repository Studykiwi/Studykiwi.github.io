output = "\n"
while True:
    title = input("Enter the title: ")
    if title == "":
        print(output)
        break
    link = input("Enter the link: ")

    output += f"<a href=\"{link}\">{title}</a><br> \n"