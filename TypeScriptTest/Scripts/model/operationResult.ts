class OperationResult {
    Success: boolean
    Message: string
}

class OperationResultWithType<T> extends OperationResult {
    Result: T
}