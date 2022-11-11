/**
 * p228 예시 (동작하지 않는 코드)
 */

public static void main(String[] args) {
  try {
    System.out.println(run(args));
  } catch (Exception e) {
    System.err.println(e);
    System.exit(1);
  }
}

static void run(String[] args) throws IOException {
  if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
  CommandLine commandLine = new CommandLine();
  return countOrders(commandLine);
}

private static 

private static long countOrders(CommandLine commandLine) throws IOException {
  File input = Paths.get(commandLine.filename()).toFile();
  ObjectMapper mapper = new ObjectMapper();
  Order[] orders = mapper.readValue(input, Order[].class);
  if(commandLine.onlyCountReady())
    return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
  else
    return orders.length;
}

private class CommandLine {
  String[] args;

  public CommandLine(String[] args) {
    this.args = args;
  }

  String filename() {
    return args[args.length - 1];
  }

  boolean onlyCountReady() {
    return Stream.of(args).anyMatch(arg -> "-r".equals(arg));
  }
}