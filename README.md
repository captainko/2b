# Submission

In this project, I use `Factory Pattern` to handle each transaction. The reason for this
is that I want to calculate sum of all transactions without checking for
which type of the transaction is (`DEPOSIT`/`WITHDRAWAL`).
If there is a new transaction type then we can just simply add a new Transaction class
