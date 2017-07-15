#
# average true range label
#
input length = 15;
input averageType = AverageType.EXPONENTIAL;

def myATR = MovingAverage(averageType, TrueRange(high, close, low), length);
AddLabel(visible = Yes, Concat( "ATR: ", myATR), color = Color.ORANGE);
