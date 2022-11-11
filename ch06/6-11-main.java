/**
 * p220 예시 (동작하지 않는 코드)
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
  String filename = args[args.length - 1];
  return countOrders(commandLine, args, filename);
}

private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
  File input = Paths.get(filename).toFile();
  ObjectMapper mapper = new ObjectMapper();
  Order[] orders = mapper.readValue(input, Order[].class);
  if(Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
    return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
  else
    return orders.length;
}

private static class CommandLine {}