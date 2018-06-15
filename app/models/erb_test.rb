class ErbTest
  class << self
    def not_from_request
      "Got this from the server, but *not* from the request."
    end
  end
end
