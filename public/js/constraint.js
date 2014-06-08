(function() {
	window.Spring = function(K, lRest) {
		var s = this

		s.K = K
		s.lRest = lRest

		s.attachBodies = function(start, end) {
			start.attachSpring(s, end)
			end.attachSpring(s, start)
		}

		s.F = function(start, startPos, endPos) {
			var spring = endPos.sub(startPos)

			var x = (spring.hat()).mul(spring.mag() - s.lRest)

			return x.mul(s.K)
		}

		return s
	}
})()